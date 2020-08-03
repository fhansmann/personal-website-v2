import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import { theme, Button } from '@styles';
import styled from 'styled-components';
const { colors, fontSizes, fonts } = theme;

const SubmitButton = styled(Button)`
    font-size: 13px;
    margin-top: 1rem;
    padding: 0.9rem 1.0rem;
`;

const SubmittedAlert = styled.div`
    font-size: 13px;
    margin-top: 1rem;
    color: ${colors.green};
    background-color: transparent;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.SFMono};
    line-height: 1;
    padding: 1.25rem 1.75rem;
`;

const InputForm = styled.input`
    color: ${colors.darkNavy};
    background-color: ${colors.white};
    width: 250px;
    border: none;
    margin-top: 1.1rem;
    font-size: ${fontSizes.small};
    font-family: ${fonts.SFMono};
    line-height: 2;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: ${colors.green};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MailChimp = () => {

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    addToMailchimp(email)
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
      });

  };
  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <Wrapper>
        { submitted ?
          <SubmittedAlert>Thanks!</SubmittedAlert>
          :
          <>
            <InputForm
              placeholder="Enter your email here"
              name="email"
              type="text"
              onChange={handleEmailChange} />
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </>
        }

      </Wrapper>
    </form>
  );
};

export default MailChimp;