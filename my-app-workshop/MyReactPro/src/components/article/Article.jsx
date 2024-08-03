import React, { useEffect, useState } from 'react'

const Article = () => {
  const [name, setName] = useState(false)
  const changeName = () => {
    setName(!name)
  }
  const [child, setChild] = useState({ son: 'son', daughter: 'daughter' })
  const pickChild = () => {
    setChild({
      ...child,
      son: 'Henry',
      daughter: 'Cathy'
    })
  }

  const publish = (formData) => {
    const content = formData.get('content')
    const button = formData.get('button')
    alert(`'${content}' was published with the '${button}' button`)
  }

  function save(formData) {
    const content = formData.get('content')
    alert(`Your draft of '${content}' has been saved!`)
  }

  useEffect(() => {
    console.log('trigger use effect hook')
    return () => {
      console.log('unmount')
    }
  }, [child])
  return (
    <div className='flex px-4'>
      <h1 className='text-3xl font-bold underline'>Article</h1>
      <section>
        <div>Article name is {name ? 'Exist' : 'Not exist'}</div>
        <button
          type='button'
          className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
          onClick={changeName}
        >
          Click
        </button>
      </section>

      <section>
        <div>Son is {child.son}</div>
        <div>Daughter is {child.daughter}</div>

        <button
          type='button'
          className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
          onClick={pickChild}
        >
          Click
        </button>
      </section>

      {/* <section>
        <form action={publish}>
          <textarea name='content' rows={4} cols={40} />
          <br />
          <button type='submit' name='button' value='submit'>
            Publish
          </button>
          <button formAction={save}>Save draft</button>
        </form>
      </section> */}
      <div>hooks</div>
    </div>
  )
}

export default Article
