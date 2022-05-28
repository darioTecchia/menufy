import type { ReactElement } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import axios from 'axios';
import { GetStaticPaths, GetServerSideProps } from 'next'

import styles from './Menu.single.module.scss'
import { Menu } from '../../models/Menu';
import { Cocktail } from '../../models/Cocktail';
import Image from 'next/image';
import BlurImage from '../../components/blurimage/BlurImage';

export default function EventSingle({ menu, cocktails }: { menu: Menu, cocktails: Cocktail[] }) {

  return (
    <div>
      <h1 className='container'>{menu.fields.name}</h1>
      <sub className='container'>{menu.fields.description}</sub>
      <br />
      <div className='container'>
        {
          cocktails?.length > 0 ?
            cocktails?.map((cocktail: Cocktail) =>
              <div key={cocktail.id} className={styles.menuItemWrapper}>
                <div className={styles.menuItem}>
                  <h2>{cocktail.fields.name}</h2>
                  <hr />
                  <h2>{cocktail.fields.price} €</h2>
                </div>
                {cocktail.fields.description && <sub><b>Descrizione</b>: {cocktail.fields.description}</sub>}
                <br />
                {cocktail.fields.ingredients && <sub><b>Ingredienti</b>: {cocktail.fields.ingredients}</sub>}
                <br />
                {cocktail.fields.allergens && <sub><b>Allergeni</b>: {cocktail.fields.allergens}</sub>}
              </div>
            )
            : <span></span>
        }
      </div>
      <div className={styles.imagesContainer}>
        {
          menu?.fields?.attachments?.length > 0 ?
            menu.fields.attachments.map(att =>
              <BlurImage key={att.id} image={att}>
              </BlurImage>
            )
            : <span></span>
        }
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    let res = await axios.get(`/menu/${params?.id}`);
    let menu = res.data as Menu;

    res = await axios.get(`/cocktail`, {
      params: {
        'filterByFormula': `FIND("${menu.fields.name}", {menu_ids})`,
      }
    });
    const cocktails = res.data.records;
    return {
      props: {
        'menu': menu,
        'cocktails': cocktails
      }
    }
  } catch (error: any) {

    return { props: { 'error': error.code } }
  }
}

EventSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout title={'Madamé - ' + page.props.menu.fields.name}>
      {page}
    </DefaultLayout>
  )
}