import React from 'react';
import Acordion from '../components/acordion';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Acordion>
      <Acordion.Title>Frequently Asked Questions</Acordion.Title>
      {faqsData.map((item) => (
        <Acordion.Item key={item.id}>
          <Acordion.Header>{item.header}</Acordion.Header>
          <Acordion.Body>{item.body}</Acordion.Body>
        </Acordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Acordion>
  );
}
