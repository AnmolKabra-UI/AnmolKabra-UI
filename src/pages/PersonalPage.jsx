import React from 'react';
import { ArrowLeft, Camera, Music, Plane, ChefHat, Zap, Waves, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PersonalPage.css';

const PersonalPage = ({ onNavigationComplete }) => {
  const navigate = useNavigate();
  const [selectedHobby, setSelectedHobby] = React.useState(null);
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    // Call navigation complete when component mounts
    if (onNavigationComplete) {
      onNavigationComplete();
    }
  }, [onNavigationComplete]);

  const hobbies = [
    {
      icon: <ChefHat className="hobby-icon" />,
      title: "Cooking",
      description: "Experimenting with flavors and creating delicious meals from different cuisines.",
      details: "I love exploring different cuisines and experimenting with new recipes. From Italian Lasagna to Indian Biriyani, I enjoy the creative process of combining ingredients to create something delicious. Cooking is my way of expressing creativity and sharing love with family and friends. I particularly enjoy trying fusion dishes and putting my own twist on traditional recipes.",
      images: ["/Cooking1.jpeg", "/Cooking2.jpeg", "/Cooking3.jpeg"]
    },
    {
      icon: <Plane className="hobby-icon" />,
      title: "Travel",
      description: "Exploring new places, cultures, and creating unforgettable memories.",
      details: "Traveling is my passion. I love exploring new places—from serene beaches to majestic mountains. Experiencing different cultures, scenic landscapes, and the simple joy of being on the road gives me a sense of freedom and inspiration. Whether it's a quiet sunrise by the sea or a breathtaking view from a hilltop, I find joy in every journey.",
      images: ["/Travel1.jpeg", "/Travel2.jpeg", "/Travel3.jpeg"]
    },
    {
      icon: <Camera className="hobby-icon" />,
      title: "Photography",
      description: "Capturing moments and exploring creative perspectives through the lens.",
      details: "Photography allows me to freeze moments in time and share my perspective with others. I enjoy experimenting with different techniques, from portrait photography to landscape shots. There's something magical about capturing the perfect light or expression. It's taught me to notice beauty in everyday moments and has become a way to document my travels and experiences.",
      images: ["/Photo1.jpeg", "/Photo2.jpeg", "/Photo3.jpeg"]
    },
    {
      icon: <Music className="hobby-icon" />,
      title: "Music",
      description: "Listening to various genres and discovering new artists from around the world.",
      details: "Music is the soundtrack to my life. I enjoy exploring different genres and understanding how music reflects different cultures. Whether I'm coding, cooking, or just relaxing, there's always a perfect playlist for the moment. Music helps me stay motivated and inspired throughout the day.",
      images: []
    },
    {
      icon: <Zap className="hobby-icon" />,
      title: "Badminton",
      description: "Staying active and competitive through this fast-paced racquet sport.",
      details: "Badminton keeps me physically active and mentally sharp. The fast-paced nature of the game requires quick reflexes and strategic thinking. I love the competitive aspect and the satisfaction of improving my technique over time. Playing regularly with friends has also been a great way to socialize and stay fit. It's the perfect balance of fun and fitness.",
      images: []
    },
    {
      icon: <Waves className="hobby-icon" />,
      title: "Swimming",
      description: "Finding peace and fitness in the water through regular swimming sessions.",
      details: "Swimming is my meditation in motion. There's something incredibly peaceful about being in the water, focusing on breathing and rhythm. It's a full-body workout that doesn't feel like exercise. Whether I'm doing laps for fitness or just floating to relax, swimming helps me clear my mind and stay physically healthy. It's my go-to activity for stress relief.",
      images: []
    }
  ];

  const openModal = (index) => {
    setSelectedHobby(index);
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      document.body.style.overflow = 'hidden';
    });
  };

  const closeModal = () => {
    setSelectedHobby(null);
    requestAnimationFrame(() => {
      document.body.style.overflow = 'unset';
    });
  };

  const openLightbox = (imageSrc) => {
    if (selectedHobby !== null) {
      const imageIndex = hobbies[selectedHobby].images.indexOf(imageSrc);
      setSelectedImage({
        src: imageSrc,
        hobbyIndex: selectedHobby,
        imageIndex: imageIndex
      });
    }
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentHobby = hobbies[selectedImage.hobbyIndex];
    const totalImages = currentHobby.images.length;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (selectedImage.imageIndex + 1) % totalImages;
    } else {
      newIndex = selectedImage.imageIndex === 0 ? totalImages - 1 : selectedImage.imageIndex - 1;
    }
    
    setSelectedImage({
      src: currentHobby.images[newIndex],
      hobbyIndex: selectedImage.hobbyIndex,
      imageIndex: newIndex
    });
  };
  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          closeLightbox();
        } else {
          closeModal();
        }
      } else if (selectedImage) {
        if (e.key === 'ArrowRight') {
          navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
          navigateImage('prev');
        }
      }
    };

    if (selectedHobby !== null || selectedImage !== null) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedHobby, selectedImage]);

  return (
    <div className="personal-page">
      {/* Header with back button */}
      <header className="personal-header">
        <div className="container">
          <button onClick={() => navigate('/')} className="back-button">
            <ArrowLeft className="back-icon" />
            Back to Portfolio
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="personal-main">
        <div className="container">
          <div className="personal-intro">
            <div className="personal-avatar">
              <div className="personal-image-container">
                <img 
                  src="/MyGhibli.jpg" 
                  alt="Anmol's Profile" 
                  className="personal-image"
                />
              </div>
            </div>
            
            <h1 className="personal-title">Beyond the Code</h1>
            <p className="personal-subtitle">
              When I'm not crafting digital experiences, here's what keeps me inspired and energized.
            </p>
          </div>
          
          <div className="hobbies-section">
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-card" onClick={() => openModal(index)}>
                  <div className="hobby-icon-container">
                    {hobby.icon}
                  </div>
                  <h3 className="hobby-title">{hobby.title}</h3>
                  <p className="hobby-description">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="personal-quote">
            <blockquote>
              "Life is about balance - coding fuels my mind, hobbies feed my soul."
            </blockquote>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedHobby !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <div className="modal-title-with-icon">
                  {hobbies[selectedHobby].images && hobbies[selectedHobby].images.length > 0 && (
                    <div className="modal-title-icon-container">
                      {hobbies[selectedHobby].icon}
                    </div>
                  )}
                  <h2 className="modal-title">My Hobby: {hobbies[selectedHobby].title}</h2>
                </div>
                {hobbies[selectedHobby].images && hobbies[selectedHobby].images.length > 0 && (
                  <div className="modal-images">
                    {hobbies[selectedHobby].images.map((image, index) => (
                      <div key={index} className="modal-image-container" onClick={() => openLightbox(image)}>
                        <img 
                          src={image} 
                          alt={`${hobbies[selectedHobby].title} ${index + 1}`}
                          className="modal-image"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="modal-close" onClick={closeModal}>
                <X className="close-icon" />
              </button>
            </div>
            
            <div className="modal-body">
              {(!hobbies[selectedHobby].images || hobbies[selectedHobby].images.length === 0) && (
                <div className="modal-icon-container">
                  {hobbies[selectedHobby].icon}
                </div>
              )}
              <p className="modal-description">
                {hobbies[selectedHobby].details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Navigation Buttons */}
            {hobbies[selectedImage.hobbyIndex].images.length > 1 && (
              <>
                <button 
                  className="lightbox-nav lightbox-prev" 
                  onClick={() => navigateImage('prev')}
                  title="Previous image"
                >
                  <ChevronLeft className="nav-icon" />
                </button>
                <button 
                  className="lightbox-nav lightbox-next" 
                  onClick={() => navigateImage('next')}
                  title="Next image"
                >
                  <ChevronRight className="nav-icon" />
                </button>
              </>
            )}
            
            <button className="lightbox-close" onClick={closeLightbox}>
              <X className="close-icon" />
            </button>
            
            {/* Image Counter */}
            {hobbies[selectedImage.hobbyIndex].images.length > 1 && (
              <div className="lightbox-counter">
                {selectedImage.imageIndex + 1} / {hobbies[selectedImage.hobbyIndex].images.length}
              </div>
            )}
            
            <img 
              src={selectedImage.src} 
              alt="Full size view"
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalPage;