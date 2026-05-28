const uv = '#00c8b4';
const uv2 = '#f5a623';
const teal = '#00a896';
const pink = '#f5a623';
const amber = '#c8860a';
const blue = '#00c8b4';
const grid = 'rgba(255,255,255,0.07)';
const tick = '#aaaaaa';

Chart.defaults.color = tick;
Chart.defaults.borderColor = grid;

// CHART 1 — Horizontal bars
new Chart(document.getElementById('chartGerencia'), {
    type: 'bar',
    data: {
        labels: ['APS – Atenção Primária', 'Vigilância Epidem.', 'Atenção Especializada', 'Saúde Mental – RAPS', 'AAE – Linhas de Cuidado', 'Odontologia', 'Regulação e Auditoria', 'Farmácia', 'Transporte Sanitário', 'Saúde Ambiental', 'Imunizações', 'SAD – Atenção Domiciliar', 'Laboratório', 'Educação em Saúde', 'VISA Sanitária'],
        datasets: [
            {
                label: 'Metas principais',
                data: [48, 28, 24, 22, 20, 18, 14, 12, 10, 10, 9, 8, 7, 6, 6],
                backgroundColor: uv,
                borderRadius: 4,
            },
            {
                label: 'Metas secundárias',
                data: [12, 8, 6, 7, 9, 5, 4, 3, 2, 3, 4, 3, 2, 2, 3],
                backgroundColor: uv2,
                borderRadius: 4,
            }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#111',
                borderColor: '#333',
                borderWidth: 1,
                titleColor: '#f0f0f0',
                bodyColor: '#aaaaaa',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: { color: grid },
                ticks: { color: tick, font: { size: 13 } }
            },
            y: {
                stacked: true,
                grid: { display: false },
                ticks: { color: tick, font: { size: 13 } }
            }
        }
    }
});

// CHART 3 — Metas Batidas
new Chart(document.getElementById('chartMetas'), {
    type: 'bar',
    data: {
        labels: ['APS', 'Vacinal', 'Farmácia', 'SAD', 'Lab', 'RAPS', 'AAE', 'CEMO', 'VISA', 'TFD'],
        datasets: [
            {
                label: '% alcançado',
                data: [78, 91, 55, 70, 62, 68, 45, 73, 80, 65],
                backgroundColor: [78, 91, 55, 70, 62, 68, 45, 73, 80, 65].map(v =>
                    v >= 75 ? '#22c55e' : v >= 50 ? '#f5a623' : '#ef4444'
                ),
                borderRadius: 4,
            },
            {
                label: 'Meta (100%)',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                backgroundColor: 'rgba(0,200,180,0.08)',
                borderColor: '#00c8b4',
                borderWidth: 1,
                borderRadius: 4,
                type: 'bar',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#111',
                borderColor: '#333',
                borderWidth: 1,
                titleColor: '#f0f0f0',
                bodyColor: '#aaaaaa',
                callbacks: {
                    label: ctx => ctx.dataset.label + ': ' + ctx.parsed.y + '%'
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: tick, font: { size: 13 }, autoSkip: false }
            },
            y: {
                max: 110,
                grid: { color: grid },
                ticks: {
                    color: tick,
                    font: { size: 13 },
                    callback: v => v + '%'
                }
            }
        }
    }
});