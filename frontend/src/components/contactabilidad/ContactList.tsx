import { ListGroup } from 'react-bootstrap';
import ContactItem, { type ContactItemProps } from './ContactItem';

const exampleContactItem: ContactItemProps = {
  oct: "OCT_0001",
  identificacion: "3723322",
  fecha_oct: new Date(2025, 10, 4),
  linea: "MIPRES"
}

export default function ContactList() {
    return (
      <ListGroup className="gap-2" >
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
        <ContactItem {...exampleContactItem}  />
      </ListGroup>
    )
}
