'use client'

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { urlToFetch } from './utils';

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
}

const ContactContext = createContext<ContactData | undefined>(undefined);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      const request = await fetch(`${urlToFetch}/data/personalData.json`);
      const data = await request.json();
      const { contact } = data;
      //console.log(data);
      setContactData(contact);
      
      
      
    };

    fetchContactData();
  }, []);

  // Wait for contact data to be loaded before rendering children
  if (!contactData) return <div>Loading...</div>;

  return (
    <ContactContext.Provider value={contactData}>
      {children}
    </ContactContext.Provider>
  );
};