import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

/* eslint-disable */

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = 'service_ID3';

  const templateID = 'template_1';

  const userID = 'user_9ioOXoLGkX2NTLcAXbSV6';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! We'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id='quote' className='contacts'>
      <div className='text-center'>
        <h1>Request a Quote</h1>
        <p>
          Please fill up the form and we will contact you as soon as
          possble.
        </p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/*Name input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  aria-invalid={errors.name ? 'true' : 'false'}
                  {...register('name', {
                    required: 'Please enter your name',
                    maxLength: {
                      value: 20,
                      message:
                        'Please enter a name with no more than 20 characters',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/*   Phone input*/}
              <div className='text-center'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Phone number in format: 1234567890'
                  name='phone'
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  {...register('phone', {
                    required: 'Please add your phone number',
                    pattern: {
                      value: /^[0-9]{3}[0-9]{3}[0-9]{4}/i,
                      message: 'invalid phone number',
                    },
                  })}
                />

                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/*Email input*/}
              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', {
                    required: 'Please provide your email',
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email',
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/*Subject input*/}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  {...register('subject', {
                    required: 'Please add your subject',
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/*Description*/}
              <div className='text-center'>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Describe your request'
                  name='description'
                  aria-invalid={errors.description ? 'true' : 'false'}
                  {...register('description', {
                    required:
                      'Please describe your request or project',
                  })}
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <div className='text-center'></div>
              <button
                className='btn-main-offer contact-btn'
                type='submit'
              >
                send request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
