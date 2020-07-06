import React from 'react';
import { GET_CITIES } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../apollo/initApollo';
import Layout from '../components/Layout';

const Cities = () => {
    const { loading, error, data } = useQuery(GET_CITIES);
    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <Layout title="All Cities">
            <h1>
                <h3>All Cities</h3>
            </h1>
            <div>
                {data.cities.map((data) => (
                    <ul key={data.id}>
                        <li>{data.name}</li>
                    </ul>
                ))}
            </div>
        </Layout>
    );
};

export default withApollo({ ssr: true })(Cities);
