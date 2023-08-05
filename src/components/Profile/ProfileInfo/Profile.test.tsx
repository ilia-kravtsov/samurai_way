import React from 'react'
import ProfileStatus from "components/Profile/ProfileInfo/ProfileStatus";
import {create} from "react-test-renderer";

describe('button component',() => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'some'} updateStatusTC={() => {}}/>)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('some')
    })

    test('after creation div should be display with correct status', () => {
        const component = create(<ProfileStatus status={'some'} updateStatusTC={() => {}}/>)
        const root = component.root
        const div = root?.findByType('div')
        expect(div).not.toBeNull()
    })

})