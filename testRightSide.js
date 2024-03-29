  // Testimonial data
  const testimonials = [
    {
        name: 'Parth Makwana',
        message: 'ATHWISE Services has been instrumental in transforming our business. Their strategic insights and expert guidance have helped us navigate complex challenges and achieve unprecedented growth. Highly recommended!'
      },
      {
        name: 'Jasveer Singh Rajput',
        message: 'Choosing ATHWISE Services Consultancy was one of the best decisions we made for our business. Their depth of knowledge, innovative strategies, and commitment to client satisfaction are unmatched. We\'ve seen remarkable growth and couldn\'t be happier with the results.'
      },
      {
        name: 'Keshar Singh Rajput',
        message: 'ATHWISE Services Consultancy exceeded our expectations in every aspect. Their expertise, professionalism, and dedication to client success are commendable. We\'re grateful for their partnership and look forward to achieving even greater milestones together.'
      },
      {
        name: 'Rahul Shah',
        message: 'Working with ATHWISE Services Consultancy was a game-changer for us. Their team\'s professionalism, dedication, and personalized approach made all the difference. They truly understand the pulse of the market and deliver results beyond expectations.'
      }

      
    ];
    
    // Function to create testimonial elements
    function createTestimonialElement(testimonial) {
      const item = document.createElement('div');
      item.classList.add('item');
    
      const h1 = document.createElement('h1');
      h1.style.color = '#ff9933';
      h1.style.fontSize = '3rem';
      h1.style.float = 'left';
      h1.style.marginTop = '0px';
      h1.innerHTML = '&#x22;';
      item.appendChild(h1);
    
      const p = document.createElement('p');
      p.style.color = 'gray';
      p.textContent = testimonial.message;
      item.appendChild(p);
    
      const h2 = document.createElement('h2');
      h2.style.marginTop = '0px';
      h2.style.float = 'left';
      h2.textContent = testimonial.name;
      item.appendChild(h2);
    
      return item;
    }
    
    // Function to add testimonials to the wrapper
    function addTestimonials() {
      const wrapper = document.getElementById('testimonialWrapper');
      wrapper.innerHTML = ''; // Clear existing testimonials
    
      testimonials.forEach(testimonial => {
        const item = createTestimonialElement(testimonial);
        wrapper.appendChild(item);
      });
    }
    
    // Initially add testimonials
    addTestimonials();