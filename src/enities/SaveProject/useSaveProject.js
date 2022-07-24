import React, {useState} from 'react'

export const useSaveProject = () => {
    const [needSaveProject, setNeedSaveProject] = useState(false)
    const [savingProject, setSavingProject] = useState(false)

    console.log('needSaveProject in entities', needSaveProject)

    const saveProject = () => {
        setNeedSaveProject(true)
        setSavingProject(true)
    }

    const setSavedProject = () => {
        setNeedSaveProject(false)
        setSavingProject(false)
    }

    return {needSaveProject, saveProject, setSavedProject, savingProject}
}