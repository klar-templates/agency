const {
  BrowserRouter,
  Switch,
  Route,
  Link
} = ReactRouterDOM;

const data = {
  "navigation": {
      "logo_text": "The Page",
      "navigation": [
          {
              "title": "Services",
              "link": "#services"
          },
          {
              "title": "Portfolio",
              "link": "#portfolio"
          },
          {
              "title": "About",
              "link": "#about"
          },
          {
              "title": "Team",
              "link": "#team"
          },
          {
              "title": "Contact",
              "link": "#contact"
          }
      ],
      "style": {
          "navbar": {
              "transparent": true,
              "sticky": true,
              "bg_color": "#222",
              "padding_top": 25,
              "padding_bottom": 25,
              "border_bottom_width": 0,
              "border_bottom_color": "transparent",
              "show_overlay": false,
              "overlay_bg_color": "#000000",
              "overlay_opacity": 20,
              "margin_top_next_block": 0
          },
          "logo": {
              "text_color": "{{theme.colors.primary_color}}",
              "text_hover_color": "{{theme.colors.primary_color}}",
              "text_focus_color": "{{theme.colors.primary_color}}",
              "font_family": "Kaushan Script",
              "image": "https://assets.brandfolder.com/8w7lv8ml/view.png",
              "padding_top": 12,
              "width": 125,
              "show": false
          },
          "navigation": {
              "text_color": "#fff",
              "text_hover_color": "{{theme.colors.primary_color}}",
              "text_active_color": "{{theme.colors.primary_color}}",
              "text_focus_color": "{{theme.colors.primary_color}}",
              "bg_text_color": "transparent",
              "bg_text_hover_color": "transparent",
              "bg_text_active_color": "{{theme.colors.primary_color}}",
              "bg_text_focus_color": "{{theme.colors.primary_color}}",
              "mobile_menu_button_bg_color": "{{theme.colors.primary_color}}",
              "mobile_menu_button_hover_bg_color": "{{theme.colors.primary_color}}",
              "mobile_menu_button_focus_bg_color": "{{theme.colors.primary_color}}"
          }
      }
  },
  "header": {
      "title": "Create an account and start making your own web sites",
      "subtitle": "Edit everything on this site and if you like it...",
      "link": "#services",
      "link_text": "Tell me more",
      "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/header-bg.jpg",
      "show_title": true,
      "show_subtitle": true,
      "show_button": true,
      "style": {
          "title_text_color": "#ffffff",
          "subtitle_text_color": "#ffffff",
          "button_bg_color": "{{theme.colors.primary_color}}",
          "button_text_color": "#ffffff",
          "padding_top": 300,
          "padding_bottom": 200,
          "full_screen": true,
          "text_align": "center",
          "show_overlay": true,
          "overlay_bg_color": "#000000",
          "overlay_opacity": 40,
          "margin_top": 0,
          "bg_image_position_top": 0
      }
  },
  "services": {
      "heading": "Services",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "items": [
          {
              "icon": "shopping-cart",
              "heading": "E-Commerce",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          },
          {
              "icon": "laptop",
              "heading": "Responsive Design",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          },
          {
              "icon": "lock",
              "heading": "Web Security",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
          }
      ],
      "style": {}
  },
  "portfolio": {
      "heading": "Portfolio",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "items": [
          {
              "title": "Project name",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p><p><strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href=\"https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc\">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href=\"https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc\">here</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/roundicons.png",
              "category": "Graphic Design",
              "client": "Round Icons",
              "date": "2014-07-14"
          },
          {
              "title": "Project heading",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p><a href=\"http://designmodo.com/startup/?u=787\">Startup Framework</a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p><p>You can preview Startup Framework <a href=\"http://designmodo.com/startup/?u=787\">here</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/startup-framework.png",
              "category": "Website Design",
              "client": "Startup Framework",
              "date": "2014-07-14"
          },
          {
              "title": "Project name",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p>Treehouse is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p><p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/\">FreebiesXpress.com</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/treehouse.png",
              "category": "Website Design",
              "client": "Treehouse",
              "date": "2014-07-14"
          },
          {
              "title": "Project name",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p><p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/golden-free-one-page-web-template/\">FreebiesXpress.com</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/golden.png",
              "category": "Website Design",
              "client": "Golden",
              "date": "2014-07-14"
          },
          {
              "title": "Project name",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p>Escape is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p><p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/\">FreebiesXpress.com</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/escape.png",
              "category": "Website Design",
              "client": "Escape",
              "date": "2014-07-14"
          },
          {
              "title": "Project name",
              "summary": "Lorem ipsum dolor sit amet consectetur.",
              "body": "<p>Dreams is a free PSD web template built by <a href=\"https://www.behance.net/MathavanJaya\">Mathavan Jaya</a>. Dreams is a modern one page web template designed for almost any purpose. It’s a beautiful template that’s designed with the Bootstrap framework in mind.</p><p>You can download the PSD template in this portfolio sample item at <a href=\"http://freebiesxpress.com/gallery/dreams-free-one-page-web-template/\">FreebiesXpress.com</a>.</p>",
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/portfolio/dreams.png",
              "category": "Website Design",
              "client": "Dreams",
              "date": "2014-07-14"
          }
      ],
      "style": {
          "block": {
              "item_bg_color": "{{theme.colors.bg_color}}",
              "item_close_btn_color": "{{theme.colors.title_text_color}}",
              "caption_title_text_color": "{{theme.colors.title_text_color}}",
              "caption_text_text_color": "{{theme.colors.text_color}}",
              "hover_content_bg_color": "{{theme.colors.primary_color}}",
              "hover_content_icon_color": "#fff",
              "caption_bg_color": "transparent"
          }
      }
  },
  "about": {
      "heading": "About",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "items": [
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/about/1.jpg",
              "title": "Our Humble Beginnings",
              "subtitle": "2009-2011",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/about/2.jpg",
              "title": "An Agency is Born",
              "subtitle": "March 2011",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/about/3.jpg",
              "title": "Transition to Full Service",
              "subtitle": "December 2012",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/about/4.jpg",
              "title": "Phase Two Expansion",
              "subtitle": "July 2014",
              "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"
          }
      ],
      "timeline_end_text": "Be Part<br>Of Our<br>Story!",
      "style": {
          "block": {
              "bg_color": "{{theme.colors.bg_color}}",
              "image_bg_color": "{{theme.colors.primary_color}}",
              "image_border_color": "#f1f1f1",
              "padding_top": "{{theme.block.padding_top}}",
              "padding_bottom": "{{theme.block.padding_bottom}}"
          }
      }
  },
  "team": {
      "heading": "Our Amazing Team",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "team": [
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/1.jpg",
              "heading": "Kay Garland",
              "text": "Lead Designer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/2.jpg",
              "heading": "Larry Parker",
              "text": "Lead Marketer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/3.jpg",
              "heading": "Diana Pertersen",
              "text": "Lead Developer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          }
      ],
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.",
      "style": {
          "block": {
              "social_links_hover_bg_color": "{{theme.colors.primary_color}}"
          }
      }
  },
  "react": {
      "heading": "Our Amazing Team",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "team": [
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/1.jpg",
              "heading": "Kay Garland",
              "text": "Lead Designer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/2.jpg",
              "heading": "Larry Parker",
              "text": "Lead Marketer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          },
          {
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/team/3.jpg",
              "heading": "Diana Pertersen",
              "text": "Lead Developer",
              "social_links": [
                  {
                      "title": "Twitter",
                      "icon": "twitter",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Facebook",
                      "icon": "facebook",
                      "link": "#youraccount"
                  },
                  {
                      "title": "Instagram",
                      "icon": "instagram",
                      "link": "#youraccount"
                  }
              ]
          }
      ],
      "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.",
      "style": {
          "block": {
              "social_links_hover_bg_color": "{{theme.colors.primary_color}}"
          }
      }
  },
  "clients": {
      "items": [
          {
              "title": "Envato",
              "logo": "https://raw.githubusercontent.com/klar-templates/agency/master/img/logos/envato.jpg",
              "url": "#clients"
          },
          {
              "title": "Designmodo",
              "logo": "https://raw.githubusercontent.com/klar-templates/agency/master/img/logos/designmodo.jpg",
              "url": "#clients"
          },
          {
              "title": "ThemeForest",
              "logo": "https://raw.githubusercontent.com/klar-templates/agency/master/img/logos/themeforest.jpg",
              "url": "#clients"
          },
          {
              "title": "Creative Market",
              "logo": "https://raw.githubusercontent.com/klar-templates/agency/master/img/logos/creative-market.jpg",
              "url": "#clients"
          }
      ],
      "style": {}
  },
  "contact": {
      "heading": "Contact Us",
      "sub_heading": "Lorem ipsum dolor sit amet consectetur.",
      "submit_button_text": "Send message",
      "notification_email": "test@example.com",
      "success_message": "Your message was successfully sent!",
      "show_name_field": true,
      "show_email_field": true,
      "show_phone_field": true,
      "style": {
          "block": {
              "bg_color": "#222222",
              "button_bg_color": "{{theme.colors.primary_color}}",
              "button_text_color": "#ffffff",
              "padding_top": "{{theme.block.padding_top}}",
              "padding_bottom": "{{theme.block.padding_bottom}}",
              "show_image": true,
              "image": "https://raw.githubusercontent.com/klar-templates/agency/master/img/map-image.png"
          },
          "base": {
              "title_text_color": "#ffffff",
              "subtitle_text_color": "#ffffff",
              "primary_color": "{{theme.colors.primary_color}}"
          }
      }
  },
  "footer": {
      "copyright_text": "Copyright &copy; Your Website 2016",
      "social_links": [
          {
              "title": "Twitter",
              "icon": "twitter",
              "link": "#youraccount"
          },
          {
              "title": "Facebook",
              "icon": "facebook",
              "link": "#youraccount"
          },
          {
              "title": "Instagram",
              "icon": "instagram",
              "link": "#youraccount"
          },
          {
              "title": "LinkedIn",
              "icon": "linkedin",
              "link": "#youraccount"
          }
      ],
      "quick_links": [
          {
              "title": "Privacy Policy",
              "link": ""
          },
          {
              "title": "Terms of Use",
              "link": ""
          }
      ],
      "style": {
          "block": {
              "bg_color": "{{theme.colors.bg_color}}",
              "social_links_hover_bg_color": "{{theme.colors.primary_color}}",
              "padding_top": 25,
              "padding_bottom": 25
          }
      }
  },
  "decoration": {
      "image": "https://svti.svt.se/wp-content/themes/svti/assets/img/kollage3.jpg"
  }
}

function App(data) {
  const block = {
    block_id: 'fdsfasf123',
    template_id: 'asdf54546',
    block: data.team
  };
  
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Startsida</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <KlarBlock {...block} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home(props) {
  return <KlarBlock {...props.props} />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(React.createElement(App, data), document.getElementById('root'));