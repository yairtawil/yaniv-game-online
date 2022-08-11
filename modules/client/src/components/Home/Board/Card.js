import { cardBack, cardSrc } from '../../../consts/cards';
import classes from './Card.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';

const duration = 500;

const Card = ({ value, 'data-drop-here': dataDropHere, back, up, setUp, disabled }) => {
    const data = useRef();

    function mouseUp() {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        const { dragElement, dropElement, dragElementInitialBoundingBox } = data.current;
        const {
            left: initialLeft,
            top: initialTop,
            width: dragWidth,
            height: dragHeight
        } = dragElementInitialBoundingBox;
        document.body.style.userSelect = null;
        dragElement.style.transition = `transform ${duration}ms`;

        if (dropElement) {
            dropElement.style.transform = null;
            dropElement.style.zIndex = null;
            dropElement.style.transition = null;
            dropElement.style.filter = null;
            // const cloneList = [...this.dragDropList]
            // const dragIndex = this.brothers.indexOf(dragElement);
            // const dropIndex = this.brothers.indexOf(dropElement);
            // cloneList[dragIndex] = this.dragDropList[dropIndex];
            // cloneList[dropIndex] = this.dragDropList[dragIndex];
            // this.dragDropListChange.emit(cloneList);
        }

        setTimeout(() => {
            dragElement.style.pointerEvents = null;
            dragElement.style.transition = null;
            dragElement.style.transform = null;
            dragElement.style.zIndex = null;
        }, duration);

        dragElement.style.transform = `translate(0, 0)`;

        if (dropElement) {
            // const { left: dropLeft, top: dropTop } = dropElement.getBoundingClientRect()
            // dropElement.style.filter = null
            // dropElement.style.transition = `transform ${this.duration}ms`
            // dropElement.style.transform = `translate(${initialLeft - dropLeft}px, ${initialTop - dropTop}px)`
            // dragElement.style.transform = `translate(${dropLeft - initialLeft}px, ${dropTop - initialTop}px)`
            // dropElement.style.zIndex = '199'
            // dropElement.classList.remove('droppable')
        } else {
            dragElement.style.transform = `translate(0, 0)`;
        }

        data.current = null;
    }

    function mouseMove(event) {
        const { dragElement, dropElement, targetElementInitialBoundingBox } = data.current;
        const {
            width: targetWidth,
            height: targetHeight,
            left: targetLeft,
            top: targetTop
        } = targetElementInitialBoundingBox;
        const { left, top, width, height } = dragElement.getBoundingClientRect();
        if (dropElement) {
            dropElement.style.filter = null;
        }
        dragElement.style.pointerEvents = 'none';
        const elements = document.elementsFromPoint(left + width / 2, top + height / 2);
        console.log('elements?', elements);
        // const brothers =
        const newDropElement = elements.find(element => element.hasAttribute('data-drop-here'));
        console.log('newDropElement?', newDropElement);
        if (newDropElement) {
            dragElement.style.pointerEvents = null;
            newDropElement.style.filter = 'drop-shadow(2px 4px 6px black)';
        }
        data.current.dropElement = newDropElement;
        dragElement.style.transition = null;
        dragElement.style.zIndex = '200';
        const translateX = event.clientX - targetLeft - targetWidth / 2;
        const translateY = event.clientY - targetTop - targetHeight / 2;
        dragElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    function onMouseDown(event) {
        function onMouseUpClear() {
            setUp(!up)
            clearTimeout(timeout);
            document.removeEventListener('mouseup', onMouseUpClear);
        }

        document.addEventListener('mouseup', onMouseUpClear);

        const timeout = setTimeout(() => {
            document.removeEventListener('mouseup', onMouseUpClear);
            const dragElement = event.target;
            document.body.style.userSelect = 'none';
            const dragElementInitialBoundingBox = dragElement.getBoundingClientRect();
            const targetElementInitialBoundingBox = event.target.getBoundingClientRect();
            data.current = { dragElement, dragElementInitialBoundingBox, targetElementInitialBoundingBox };
            console.log('mouse move started');
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
        }, 200);
    }

    return (
        <div className={clsx(classes.card, { [classes.up]: up, [classes.disabled]: disabled })} onMouseDown={onMouseDown}
            data-drop-here={dataDropHere}>
            <img src={back ? cardBack : cardSrc[value]} />
        </div>
    );
};

export default Card;
