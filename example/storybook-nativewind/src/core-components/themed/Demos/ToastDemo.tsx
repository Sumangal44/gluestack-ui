import { Toast, ToastDescription, ToastTitle, VStack } from '@/components/ui';
import React from 'react';

const ToastDemo = () => {
  return (
    <Toast action="info" variant="accent">
      <VStack space="xs">
        <ToastTitle>Info</ToastTitle>
        <ToastDescription>Add a note here</ToastDescription>
      </VStack>
    </Toast>
  );
};

export default ToastDemo;
