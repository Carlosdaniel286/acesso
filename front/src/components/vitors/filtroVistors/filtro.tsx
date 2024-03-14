
'use client'
import Image from 'next/image';
import style from './filtro.module.css';
import Options from './component/options/options';
import { useRef, useState, useEffect } from 'react';

type FilterProps = {
  displayOptions: boolean | 'default';
};

export default function Filtro({ displayOptions }: FilterProps) {
  const [hidden, setHidden] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayOptions !== 'default') {
      setHidden(displayOptions);
    }
  }, [displayOptions]);

  return (
    <div ref={divRef} className={style.filtroBody}>
      <div className={style.filtroConetnt} onClick={() => setHidden(!hidden)}>
        {!hidden && (
          <>
            <div id={style.filterImage}>
              <Image
                id={style.filterImages}
                alt='filtro'
                width={50}
                height={50}
                src='/search.png'
              />
            </div>
          </>
        )}
      </div>

      {hidden && (
        <div className={style.filterOptions}>
          <div className={style.filter_hidden} onClick={() => setHidden(!hidden)}>
            <p>X</p>
          </div>

          <Options
            diplayOptions={() => {
              setHidden(!hidden);
            }}
          />
        </div>
      )}
    </div>
  );
}
