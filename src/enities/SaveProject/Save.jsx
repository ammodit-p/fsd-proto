import React from 'react'

import {UI} from '../../shared'
import {useSaveProject} from './useSaveProject'

export const SaveButton = () => {
    const {saveProject, savingProject} = useSaveProject()

    return (<UI.Button onClick={saveProject}>{savingProject ? 'Сохранение' : 'Сохранить'}</UI.Button>)
}