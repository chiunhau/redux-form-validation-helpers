# redux-form-validation-so-easy
Some useful validation helpers for quick developing with redux-form.

## Installation
`npm install --save redux-form-validation-so-easy`

## Usage
If you follow the example of redux-form's sync validations, you would have code like this:

```js
const validate => values => {
  ...
  //MASSIVE UGLY LENGTHY RULES :(
  ...
}

const SyncValidationForm = props => {
  ...
}

export default reduxForm({
  form: 'syncValidation',
  validate
})(SyncValidationForm)
```

Not that cool. It pollute the file (IMO) and is lack of reusability. So let me introduce my helpers and replace the original `validate` function like this:

```js
import vSetRules, {vMoreThan, vEmail, vROCId} from 'redux-form-validation-so-easy'

const validate = vSetRules([
  {name: 'username', rules: [vMoreThan(6)]},
  {name: 'email', rules: [vEmail()]},
  {name: 'id', rules: [vROCId()]}
])

const UserForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="username" component={renderField} type="text" label="Name"/>
      <Field name="id" component={renderField} type="text" label="ID" />
      <Field name="email" component={renderField} type="email" label="Email"/>
    </form>
  )
})

export default reduxForm({
  form: 'user',
  validate
})(UserForm)
```
Ok cool. Have fun.

## Available helpers (so far)
- vEmail()
- vROCId()
- vMoreThan(number)
