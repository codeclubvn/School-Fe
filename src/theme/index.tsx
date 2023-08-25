'use client';

import React from 'react';

import { ConfigProvider } from 'antd';

const CusThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CusThemeProvider;
