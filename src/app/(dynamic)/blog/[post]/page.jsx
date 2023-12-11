
import styles from "../post.module.css"
import Link from 'next/link'
import Image from 'next/image'


const post = () => {
  return (
    <div className={styles.container} >
<Link href="/id" className={styles.post}>
<div className={styles.container}> 
<Image
className={styles.Image}
  src={"https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg"}
  width={350}
  height={250}
  alt="post image"
/>

<div className={styles.content}>
  <h1 className={styles.title}>post title</h1>
  <p className={styles.post}></p>
</div>

</div>
</Link>
    </div>
  )
}

export default post
