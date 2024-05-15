import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputDefault from '../../shared/ui/Inputs/InputDefault/InputDefault';
import { useAppDispatch } from '../../shared/lib/hooks/redux';
import { convertCurrencies } from '../../entities/currencies/actions';
import { Button } from '@mui/material';
import cls from './style.module.scss'

interface FormData {
    conversion: string;
}

const CurrencyConverter: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [result, setResult] = React.useState<string>('');

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FormData> = async (data) => {
      const from = data.conversion.split(' ')[1].toUpperCase();
      const to = data.conversion.split(' ')[3].toUpperCase();
      const amount = parseFloat(data.conversion.split(' ')[0]);
      dispatch(convertCurrencies({
        from,
        to
      })).unwrap().then((res) => {
        setResult(`${amount} ${from} to ${to} = ${res.data.conversion_rate * amount} ${to}`)
      })
    };

    return (
        <div className={cls.converterCont}>
            <h1>Currency Converter</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputDefault
                    type="text"
                    {...register("conversion", { required: true })}
                    placeholder="Введите конверсию (например, 15 usd in eur)"
                />
                {errors.conversion && <span>Поле обязательно для заполнения</span>}
                <Button variant='contained' type="submit">Конвертировать</Button>
            </form>
            <p>{result}</p>
        </div>
    );
};

export default CurrencyConverter;
