'use client';
import {Button} from '@/components/Common/Button';
import React, {useState} from 'react';

const inputForm = [
  {
    title: 'Tên',
    type: 'text',
    placeholder: 'Tên*',
    name: 'name',
    required: true
  },
  {
    title: 'công ty',
    type: 'text',
    placeholder: 'Công ty*',
    name: 'company',
    required: true
  },
  {
    title: 'Số điện thoại',
    type: 'text',
    placeholder: 'Số điện thoại*',
    name: 'phone',
    required: true
  },
  {
    title: 'Email',
    type: 'email',
    placeholder: 'Email*',
    name: 'email',
    required: true
  },
  {
    title: 'Nội dung',
    type: 'textarea',
    placeholder: 'Nội dung*',
    name: 'content',
    required: true
  }
];

const ContactForm = () => {
  const [form, setForm] = useState<any>(
    inputForm.reduce((acc, cur) => ({...acc, [cur.name]: ''}), {})
  );
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      // Reset form after submission
      setForm(inputForm.reduce((acc, cur) => ({...acc, [cur.name]: ''}), {}));
      setSubmitted(false);
    }, 1500);

    console.log({form});

    // Handle form submission logic here
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      {inputForm.map((input) => (
        <div className="col-12" key={input.name}>
          {input.type === 'textarea' ? (
            <textarea
              className="form-control"
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              value={form[input.name]}
              onChange={handleChange}
              rows={4}
              style={{
                border: 'none',
                backgroundColor: '#F2F2F2'
              }}
            />
          ) : (
            <input
              className="form-control"
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              value={form[input.name]}
              onChange={handleChange}
              style={{
                border: 'none',
                backgroundColor: '#F2F2F2',
                minHeight: 44
              }}
            />
          )}
        </div>
      ))}
      <div className="col-12 mt-5">
        <Button
          btnProps={{
            text: 'Gửi tin nhắn',
            type: 'submit'
          }}
        />
      </div>
      {submitted && (
        <div className="col-12">
          <div className="alert alert-success mt-3" role="alert">
            Đã gửi thành công!
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
