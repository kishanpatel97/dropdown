import { components } from 'react-select';

const Option = (props) => {

    const { isSelected, label } = props;

    return (
        <div>
            <components.Option {...props}>
                <input type='checkbox' checked={isSelected} onChange={() => null} />{' '}
                <label>{label}</label>
            </components.Option>
        </div>
    );
};

export default Option;
