import { Controller, useForm } from 'react-hook-form'
import InputDefault from '../../shared/ui/Inputs/InputDefault/InputDefault'

import cls from './style.module.scss'
import { Form } from '../../shared/lib/types'



const Converter = () => {

  const { control } = useForm<Form>()

  const transformAndValidateInput = (input: string) => {
    // Transform input to uppercase and desired format
    const transformedInput = input.toUpperCase().replace(/(\b[A-Z]{3}\b)/g, '$1 ');

    // Validate transformed input against pattern
    const pattern = /^(15\sUSD\s(?:TO|IN)\sEUR)$/;
    return pattern.test(transformedInput);
  };


  return (
    <div className={cls.converterCont}>
      <Controller
          name="convertText"
          control={control}
          defaultValue=""
          rules={{
            validate: transformAndValidateInput
          }}
          render={({ field }) => (
            <>
              <InputDefault 
                label='Введите запрос для конвертации' 
                placeholder='15 USD in EUR' 
                {...field}
              />
            </>
          )}
        />
    </div>
  )
}

export default Converter