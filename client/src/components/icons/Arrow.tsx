import React from 'react';

export const Arrow: React.FC<{ className?: string, style?: any }> = ({ className, style }) => {
  return (
    <svg width="209" height="144" viewBox="0 0 209 144" className={className} style={style} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.4375 70.2929C66.2705 69.2196 121.895 67.8388 177.728 66.7655C189.782 66.6672 188.289 47.9281 176.444 48.3337C120.611 49.4071 64.9869 50.7878 9.15392 51.8611C-2.89967 51.9594 -1.61609 70.3911 10.4375 70.2929Z"
        fill="currentColor"
      />
      <path
        d="M95.6111 142.234C132.091 117.931 168.056 93.5287 204.536 69.2255C209.454 65.8885 210.113 58.259 205.239 54.3836C181.177 34.7982 155.072 17.4961 128.057 2.15897C117.705 -3.83537 109.603 13.3335 120.053 18.8119C145.927 33.128 170.275 49.8263 193.404 68.6982C193.569 63.6484 193.943 58.906 194.108 53.8562C157.627 78.1593 121.663 102.561 85.1829 126.864C75.3465 133.539 85.7747 148.908 95.6111 142.234Z"
        fill="currentColor"
      />
    </svg>
  );
};