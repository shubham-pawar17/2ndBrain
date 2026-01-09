import { useState } from 'react'
import '../App.css'
import { Button } from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'

 export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent();

  return (
  <div>
  <Sidebar/>
  <div className="p-4 ml-64 min-h-screen bg-gray-200 border-gray-300 border">
    <CreateContentModal open={modalOpen} onClose={() =>{
      setModalOpen(false);
    }}/>
      <div className='flex justify-end gap-4 '>
        <Button
          startIcon={<ShareIcon size="lg" />}
          size="lg"
          variant="secondary"
          text="Share brain"
          // onClick={() => setModalOpen(true)}
        />
        <Button
          startIcon={<PlusIcon size="lg" />}
          size="lg"
          variant="primary"
          text="Add Content"
          onClick={() => {setModalOpen(true)}}
        />
      </div>
      <div className="flex gap-4">
        {content.map(({type , title , link })=>
        <Card type={type} link={link} title={title} />
        )}
      </div>
    </div>
  </div>
  )
}

