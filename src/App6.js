import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};





const data1 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export const App6 = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <h2>Bar Example (custom size)</h2>
                    <Bar
                        data={data}
                        width={100}
                        height={150}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <h2>Pie Example (custom size)</h2>
                    <Pie data={data1} />
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
        </div>
    )
}
