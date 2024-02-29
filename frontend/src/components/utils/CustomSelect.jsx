import Select from 'react-select';

const CustomSelect = ({ options, selectedCountry, onChange }) => {

    const formatOptionLabel = ({ code, flag }, { context }) => (
        <div className='flex items-center bg-white'
         >
          <img src={flag} alt={code} style={{ width: '20px', marginRight: '5px' }} />
          {context === 'menu' ? `${code}` : null}
        </div>
      );

    return (
        <div className='flex items-center bg-white'>
            <Select
                options={options}
                value={selectedCountry}
                onChange={onChange}
                isSearchable={false}
                styles={{ control: (provided, state) => ({ ...provided, maxHeight: '1.5rem',  backgroundColor: 'white', }) }}
                formatOptionLabel={formatOptionLabel}
            />
        </div>
    );
};

export default CustomSelect;