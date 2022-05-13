import React from "react";
import { createRoot } from 'react-dom/client'

// import TaggingCanvas from 'tagging-canvas'
import s from './index.module.scss'

const cvs = (document.getElementById('canvas') as HTMLCanvasElement);
const root = createRoot((document.getElementById('root') as HTMLCanvasElement));

// const tc = new TaggingCanvas({node: cvs})

// console.log(tc)

root.render(<div className={s.qwe}>qwe</div>)