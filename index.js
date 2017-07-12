const vSetRules = fields => {
  return values => {
    let errors = {}
    for (let i = 0; i < fields.length; i ++) {
      const field = fields[i];

      if (field.rules) {
        for (let j = 0; j < field.rules.length; j ++) {
          const rule = field.rules[j]
          const value = values[field.name]
          const result = rule(value);

          if (!errors[field.name] && result) {
            errors[field.name] = result
          }
        }
      }
    }
    return errors
  }
}

export const vMoreThan = a1 => {
  return v => {
    if (v && v.length > a1 === false) {
      return `字數須大於${a1}字`
    }
    return false
  }
}

export const vEmail = () => {
  return v => {
    if (v && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)) {
      return 'Email 格式不符！！！'
    }
    return false
  }
}

export const vROCId = () => {
  return v => {
    if (v && !/[A-Za-z][0-9]{9}$/i.test(v)) {
      return '身分證格式不符！！！'
    }
    return false
  }
}


export default vSetRules
