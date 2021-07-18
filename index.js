import express from 'express'
import cron from 'node-cron'

const app = express()


app.listen(3333, () => {
  console.log('server is running')

  cron.schedule('*/5 * * * * *', () => {
    const dynamicDate = new Date().toString()
    console.log(`${dynamicDate} - estoque atualizado`)
  })
})

// * minuto de 0 a 59
// * hora de 0 a 23
// * dia do mes, 1 a 31
// * mes, de 1 a 12
// * dia da semana, de 0 a 7

// * asterisco, define os parametros de agendamento

// , virgula, mantem dois ou mais tempos de execução em unico comando

// - hífen, intervalo de tempo

// / barra inclinada, intervalos dentro de um intervalo

// L ultimo dia da semana no mes, exemplo: 3L = ultima quarta-feira

// W dia da semana mais proximo do tempo configurado, exemplo: 
    // 1W = se o primeiro for um sabado, o comando vai ser executado na segunda-feira

// # hashtag, dia da semana de uma determinada semana, ex:
    // 1#2 = segunda segunda-feira do mes

// ? interrogação, serve para deixar um espaço

// exemplos:

// '0 0 * * *' = meia noite de cada dia
// '0 6,18 * * *' = 6 da manhã e às 18h da tarde
// '0 */6 * * *' = a cada 6 horas
// '*/10 * * * *' = a cada 10 minutos
// '0 * 20 7 *' = a cada hora do dia 20 de julho
// '0 0 * * 2' = toda terça-feira a meia noite
// '* * * 1,2,5 *' = em janeiro, fevereiro e maio
// '10-59/5 5 * * *' = a cada 5 minutos às 5:00h da manhã, começando às 5:10h
// '0 0 1 * *' = no primeiro dia de cada mes
// '0 0/3 '