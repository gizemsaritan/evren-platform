import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'

export default function Home() {
  return (
    <>
      <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>

      <div className='mt-4'>
        <h3 className='text-lg mb-2'>Examples</h3>
        <p className='mb-4'>
          The following examples are used for demo purposes and help you bootstrap development.
        </p>

        <CardList items={EXAMPLE_ITEMS} />
      </div>
    </>
  )
}
