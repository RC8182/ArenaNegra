import { ArenaContex } from '@/context/arenaProvider'
import { datos } from '@/data/datos'
import { Button, Link } from '@chakra-ui/react';
import React, { useContext } from 'react'

export const Reservar = () => {
    const {idioma}= useContext(ArenaContex);
  return (
    <Button border={'1px black solid'}>
    {(idioma === datos.esp)?
      <Link href={`https://module.thefork.com/es_ES/module/712642-fb7c5/9390-6aa?tracking_id=4e8b943e-bf61-4ef0-a9f9-f094fe67c081#/4575413/dhp?`} isExternal>Reservar</Link>
      : <Link href={`https://module.thefork.com/es_ES/module/712642-fb7c5/9390-6aa?tracking_id=4e8b943e-bf61-4ef0-a9f9-f094fe67c081#/4575413/dhp?`} isExternal>Book a Table</Link>
    }
  </Button>
  )
}
