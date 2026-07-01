import { BRAND_DATA } from '../data/content';

interface StoriesProps {
  onOpenStory: (title: string, content: string, date: string, readTime: string) => void;
}

export default function Stories({ onOpenStory }: StoriesProps) {
  const stories = BRAND_DATA.stories;

  return (
    <section id="stories" className="stories-section section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">The Archive</span>
          <h2 className="section-title">Untold Stories</h2>
          <div className="divider"></div>
          <p className="section-description">
            Decades of rock 'n roll secrets, television power plays, and celebrity encounters, direct and unfiltered.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article 
              key={story.id} 
              className="story-card"
              onClick={() => onOpenStory(story.title, story.content, story.date, story.readTime)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="story-meta">
                  <span className="story-date">{story.date}</span>
                  <span className="story-readtime">{story.readTime}</span>
                </div>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-excerpt">{story.excerpt}</p>
              </div>
              <div>
                <button 
                  className="btn-text"
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid double triggering
                    onOpenStory(story.title, story.content, story.date, story.readTime);
                  }}
                >
                  Read Story &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
