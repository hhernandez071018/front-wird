import { Input } from 'antd';
import { ChangeEvent } from 'react';

type SearchProps = {
  onSearch: (query: string) => void;
};

const Searcher = ({onSearch}: SearchProps): JSX.Element => {
     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
    return<Input.Search placeholder='Buscar ...' onChange={handleChange}></Input.Search>
}

export default Searcher;