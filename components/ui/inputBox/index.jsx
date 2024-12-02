import React from 'react';
import { Field, Input, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

const InputBox = ({ label, placeholder, textarea, className }) => {
    return (
        <div className="w-full">
            <Field>
                {
                    label && (
                        <Label className="text-gray-500 font-medium mb-2 block">{label}</Label>
                    )
                }
                {
                    textarea ? (
                        <Textarea
                            name="message"
                            className="rounded border border-gray-300 resize-none w-full py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder={placeholder}
                            rows={6}
                        />
                    ) : (
                        <Input
                            className={clsx(
                                'block w-full rounded border border-gray-300 py-3 px-3',
                                'focus:outline-none focus:ring-2 focus:ring-blue-400',
                                className
                            )}
                            placeholder={placeholder}
                        />
                    )
                }
            </Field>
        </div>
    );
};

export default InputBox;
