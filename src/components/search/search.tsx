import Form from 'react-bootstrap/Form';

const Search: React.FC = () => {
    return <section className="search-wrapper">
        <Form>
            <Form.Control type="text" placeholder="Search..." />
        </Form>
    </section>
}

export default Search