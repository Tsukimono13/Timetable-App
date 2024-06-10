import React, { useState } from "react";
import { Listbox, Button } from "@headlessui/react";
import cls from "./Select.module.scss";
import { classNames } from "../../lib/classNames/classNames";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  name: string;
  options: SelectOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
  defaultLabel?: string;
}

export const Select = (props: SelectProps) => {
  const { name, options, defaultValue, onChange, ariaLabel, defaultLabel, className } =
    props;
  const [selected, setSelected] = useState<string>(defaultValue || "");

  const handleChange = (value: string) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Listbox
      value={selected}
      onChange={handleChange}
      name={name}
      aria-label={ariaLabel}
    >
      <div className={classNames(cls.Select, {}, [className])}>
        <Listbox.Button className={cls.selectButton} as="div">
          <span className={cls.selectLabel}>
            {selected
              ? options.find((option) => option.value === selected)?.label
              : defaultLabel}
          </span>
        </Listbox.Button>
        <Listbox.Options className={cls.selectOptions}>
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active, selected }) =>
                `${cls.selectOption} ${active ? cls.selectOptionActive : ""} ${
                  selected ? cls.selectOptionSelected : ""
                }`
              }
            >
              {({ selected }) => (
                <span
                  className={`${cls.selectLabel} ${
                    selected ? cls.selectLabelSelected : ""
                  }`}
                >
                  {option.label}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
