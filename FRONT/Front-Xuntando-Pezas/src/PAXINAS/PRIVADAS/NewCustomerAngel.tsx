import { useState } from 'react';
import styles from './NewCustomer.module.css';
import illustration from '../../assets/customer-images/illustration.png';
import profileIcon from '../../assets/customer-images/profile.png';


interface FormData {
  nome: string;
  apelidos: string;
  empresa: string;
  mail: string;
  profesion: string;
  rol: string;
}

const NewCustomerAngel = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    apelidos: '',
    empresa: '',
    mail: '',
    profesion: '',
    rol: ''
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', { ...formData, profileImage });
    // Aquí iría la lógica para enviar los datos al backend
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.profileSection}>
            <h2>Profile</h2>
            <div className={styles.imageContainer}>
              {profileImage ? (
                <img src={profileImage} alt="Profile" className={styles.profileImage} />
              ) : (
                <div className={styles.placeholderImage}>
                  <img src={profileIcon} alt="Default Profile" className={styles.userIcon} />
                </div>
              )}
            </div>
            <div className={styles.imageButtons}>
              <label className={styles.changeButton}>
                Change picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              <button
                type="button"
                onClick={handleDeleteImage}
                className={styles.deleteButton}
              >
                Delete picture
              </button>
            </div>
          </div>

          <div className={styles.formFields}>
            <div className={styles.fieldGroup}>
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="apelidos">Apelidos</label>
              <input 
                type="text" 
                id="apelidos" 
                name="apelidos"
                value={formData.apelidos}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="empresa">Empresa</label>
              <input 
                type="text" 
                id="empresa" 
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="mail">Mail</label>
              <input 
                type="email" 
                id="mail" 
                name="mail"
                value={formData.mail}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="profesion">Profesion</label>
              <input 
                type="text" 
                id="profesion" 
                name="profesion"
                value={formData.profesion}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="rol">Rol</label>
              <input 
                type="text" 
                id="rol" 
                name="rol"
                value={formData.rol}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.rightSection}>
        <img 
          className={styles.illustration} 
          src={illustration} 
          alt="Illustration" 
        />
        <button type="button" onClick={handleSubmit} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default NewCustomerAngel; 