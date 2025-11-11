'use client';
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    goal: '',
    activity: '',
    preferences: '',
  });

  const router = useRouter();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleFinish = async () => {
    try {
      const { userAPI } = await import('@/lib/api');
      const response = await userAPI.saveOnboarding(formData);
      
      if (response.success) {
        alert('🎉 Onboarding Complete!');
        router.push('/dashboard');
      } else {
        alert('Failed to save onboarding data. Please try again.');
      }
    } catch (error) {
      console.error('Onboarding error:', error);
      alert('Failed to save onboarding data. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Onboarding Wizard
        </h1>

        {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} prevStep={prevStep} finish={handleFinish} />}
      </div>
    </div>
  );
}
