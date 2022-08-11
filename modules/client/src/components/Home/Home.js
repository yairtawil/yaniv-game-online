import Navbar from './Navbar/Navbar'
import { leaf10, leaf6, leaf7, leaf8, leaf9 } from '../../consts/cards'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { IsConnected } from '../../state/user'
import Board from './Board/Board'
import classes from './Home.module.scss'

const socket = io('http://localhost:5000')

const Home = () => {
    const [isConnected, setIsConnected] = useRecoilState(IsConnected)

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true)
        })

        socket.on('allUsers', data => {
            console.log('allUsers? data?', data)
            // setUsers(data)
        })

        socket.on('disconnect', () => {
            setIsConnected(false)
        })

        socket.on('pong', () => {
            // setLastPong(new Date().toISOString());
        })

        return () => {
            socket.off('connect')
            socket.off('disconnect')
            socket.off('pong')
        }
    }, [])

    return (
        <div className={classes.root}>
            <Navbar />

            <Board />
        </div>
    )
}

export default Home
