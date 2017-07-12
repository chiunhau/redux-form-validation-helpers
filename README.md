# redux-form-validation-helpers
Some useful validation rules for quick developing with redux-form.

## Installation
`npm install --save redux-form-validation-helpers`

## Usage
Let's assume we are working with redux-form's sync validations, then you would have code like this:

```js
const validate => values => {
  ...
  //MY UGLY LENGTHY RULES :(
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

For some reasons I want to split those validation logics to somewhere and make them reusable, so let me introduce my helpers and just replace the original `validate` function like this:

```js
import vSetRules, {vMoreThan, vEmail, vROCId} from 'redux-form-validation-helpers'

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

## Available helpers (so far)
- vEmail()
- vROCId()
- vMoreThan(number)
