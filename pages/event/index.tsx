import type { ReactElement } from 'react'
import EventsList from '../../components/events/Events.List'
import DefaultLayout from '../../layouts/DefaultLayout'
import axios from 'axios';
import { GetServerSideProps } from 'next'

export default function EventsIndex({ events }: any) {
  return (
    <div className='container'>
      <h1>Eventi</h1>
      <EventsList events={events} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('/event');
    const events = res.data;
    return { props: { 'events': events.records } }
  } catch (error: any) {
    return { props: { 'error': error.code } }
  }
}

EventsIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Eventi'>
      {page}
    </DefaultLayout>
  )
}