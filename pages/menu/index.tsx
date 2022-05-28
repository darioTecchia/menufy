import Link from 'next/link';
import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Menu } from '../../models/Menu';
import axios from 'axios';
import { GetServerSideProps } from 'next'

import styles from './Menu.List.module.scss'
export default function MenusIndex({ menus }: any) {
  return (
    <div className='container'>
      {menus?.length > 0 ?
        <div className={styles.menuList}>
          {
            menus?.map((e: Menu) => (
              <Link key={e.id} href={'/menu/' + e.id}>
                <a className={styles.menu}>
                  <h1>{e.fields.name}</h1>
                  <sub>{e.fields.description}</sub>
                </a>
              </Link>
            ))
          }
        </div>
        : <h2>Nessuna pagina del menú presente</h2>}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get('/menu', {
      params: {
        'sort[0][field]': 'order'
      }
    });
    const menus = res.data;
    return { props: { 'menus': menus.records } }
  } catch (error: any) {
    return { props: { 'error': error.code } }
  }
}

MenusIndex.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title='Madamé - Menú'>
      {page}
    </DefaultLayout>
  )
}