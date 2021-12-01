import { useState } from 'react';
import { data } from '../data';
import Option from './Option';
import { default as ReactSelect } from 'react-select';

const Dropdown = () => {
    const [optionSelected, setOptionSelected] = useState(null);

    const deselectAll = (e) => {
        const deselect = e.find((selection) => selection.value === 'deselect all');
        deselect ? setOptionSelected(null) : setOptionSelected(e);
    };

    console.log(optionSelected);
    return (
        <div
            className='d-inline-block'
            data-toggle='popover'
            data-trigger='focus'
            data-content='Please select account(s)'
        >
            <ReactSelect
                options={data}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{ Option }}
                onChange={(e) => deselectAll(e)}
                allowSelectAll={true}
                value={optionSelected}
            />
        </div>
    );
};

export default Dropdown;
