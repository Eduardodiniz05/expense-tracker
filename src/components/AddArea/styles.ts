import styled from 'styled-components'


export const Container = styled.form`
    display: flex;
`


export const Data = styled.data `
& .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      width: 100%;
      height: 40px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        padding: 12px 16px 14px;
      }
    }`

    export const CategoryName = styled.input.attrs({type: 'text'}) ``

    export const TitleName = styled.input.attrs({type: 'text'}) ``

    export const Value = styled.input.attrs({type: 'time'})``

    export const SendButton = styled.button ``