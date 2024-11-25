'use client';

import templateApi from '@/api/templateApi';
import ButtonTemplate from '@/components/common/ButtonTemplate';
import { useState } from 'react';

const TemplateComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      return;
    }

    if (e.target.value.length === 0) {
      setError(true);
    } else {
      setError(false);
    }

    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    const res = await templateApi({ input: inputValue });

    alert(`${res.data.input} ${res.data.value} ${process.env.NODE_ENV}`);
  };

  return (
    <div className="container mt-10 mx-auto flex flex-col items-center justify-center gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className=" border-2 border-black"
      />

      <ButtonTemplate
        variant="default"
        size="sm"
        error={error}
        handler={handleClick}
      >
        Click me
      </ButtonTemplate>
    </div>
  );
};

export default TemplateComponent;
