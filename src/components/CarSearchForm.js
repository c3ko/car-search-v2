import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

const CarSearchForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      make: Form.createFormField({
        ...props.make,
        value: props.make.value,
      }),
      model: Form.createFormField({
          ...props.model,
          value: props.model.value
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})((props) => {
  const { getFieldDecorator } = props.form;
  const { handleSubmit } = props;

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <FormItem label="make">
        {getFieldDecorator('make', {
          rules: [{ required: true, message: 'make is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem label="model">
        {getFieldDecorator('model', {
          rules: [{ required: true, message: 'model is required!' }],
        })(<Input />)}
      </FormItem>
      <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
    </Form>
  );

})

export default CarSearchForm;