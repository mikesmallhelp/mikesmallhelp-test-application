import React, { useState, ChangeEvent } from 'react';
import PageTemplate from './PageTemplate';
import { fetchData } from '../util/util';

const WorkingPage = ({ title }: { title: string }) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState('');

    const handleButtonClick = async () => {
        try {
            await fetchData('200', setLoading);
            setResult('Find 3545 rows');
        } catch (error) {
            console.error(error);
        }
    };

    const PageContent = (
        <div>
            <div>Name:</div>
            <input />
            <br />

            <div>Menu selection:</div>
            <select name="someValues" id="someValues">
                <option value="Fish">Fish</option>
                <option value="Meat">Meat</option>
            </select>
            <br />

            <div>Eat a desert:</div>
            <input type="checkbox" />
            <br />

            <div>Age:</div>
            <div>
                <input type="radio" id="age1" name="age" value="age1" />
                <label htmlFor="age1">under 30</label>
            </div>
            <div>
                <input type="radio" id="age2" name="age" value="age2" />
                <label htmlFor="age2">30-45</label>
            </div>
            <div>
                <input type="radio" id="age3" name="age" value="age3" />
                <label htmlFor="age3">over 45</label>
            </div>
            <br />

            <div>Registration email:</div>
            <input type="email" />
            <br />

            <div>Registration password:</div>
            <input type="password" />
            <br />

            <div>Search for help:</div>
            <input type="search" />
            <br />

            <div>Your homepage url:</div>
            <input type="url" />
            <br />

            <button onClick={handleButtonClick}>Normal button</button>

            <div>{result}</div>

            <a href='/'>Back to main page</a>
        </div>
    );

    return (
        <>
            <PageTemplate title={title} content={PageContent} loading={loading} setLoading={setLoading} />
        </>
    );
};

export default WorkingPage;
