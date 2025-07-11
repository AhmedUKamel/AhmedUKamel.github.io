# Ahmed Kamel - Portfolio Website

A modern, responsive portfolio website for Ahmed Kamel, Node.js Developer.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated skill bars
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Skills Section**: Progress bars and technology badges
- **Project Showcase**: Cards with hover effects, technology tags, logos, and multiple link types
- **App Store Links**: Support for Google Play Store and Apple App Store links
- **Project Logos**: Display project logos with fallback handling
- **Smooth Animations**: Fade-in animations and parallax effects

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── database.json       # Portfolio data (content management)
├── assets/             # Images and other assets
└── README.md           # This file
```

## Database Structure

The `database.json` file contains all the portfolio content organized in the following sections:

- **personal**: Name, title, bio, and contact information
- **stats**: Achievement statistics displayed in the about section
- **experience**: Work history with company details
- **education**: Academic background
- **skills**: Technical skills organized by categories
- **projects**: Portfolio projects with multiple link types and logos
- **contact**: Contact methods and form configuration
- **navigation**: Site navigation structure
- **seo**: Meta tags and SEO information
- **settings**: Site-wide settings and configuration

### Project Structure

Each project can include:
- **GitHub**: Repository link
- **Live Demo**: Working application link
- **Google Play**: Android app store link
- **App Store**: iOS app store link
- **Logo**: Project logo image path
- **Types**: Array of project types (e.g., ["mobile", "fullstack"])
- **Company**: Object with company name and type
- **Order**: Numeric field for sorting projects (lower numbers appear first)

## Sections

1. **Hero Section**: Introduction with name and title
2. **About**: Personal description and statistics
3. **Experience**: Work history with timeline
4. **Education**: Academic background
5. **Skills**: Technical skills with progress bars
6. **Projects**: Portfolio projects with descriptions
7. **Contact**: Contact information and form

## Customization

To customize this portfolio for your needs:

1. **Personal Information**: Update `database.json` with your name, title, and bio
2. **Experience**: Modify the experience section with your work history
3. **Skills**: Adjust skill levels and add/remove technologies
4. **Projects**: Replace placeholder projects with your actual work
5. **Project Links**: Add GitHub, live demo, Google Play, and App Store links
6. **Project Logos**: Add logo images to the `assets/` folder
7. **Contact**: Update email and social media links
8. **Colors**: Modify the color scheme in `style.css`
9. **Content**: All content is now managed through `database.json`

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Flexible grid layouts

### Interactive Elements
- Smooth scrolling navigation
- Animated skill bars
- Hover effects on cards
- Form validation
- Mobile hamburger menu

### Modern Styling
- Gradient backgrounds
- Soft shadows
- Rounded corners
- Smooth transitions
- Professional color scheme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS and JavaScript
- Efficient animations
- Minimal external dependencies
- Fast loading times

## SEO Friendly

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for social sharing
- Alt text for images

## Deployment

This is a static website and can be deployed on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

This project is open source and available under the MIT License.

## Contact

For questions or modifications, please contact Ahmed Kamel.
