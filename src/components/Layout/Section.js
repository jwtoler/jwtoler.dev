import classNames from 'classnames';

const Section = ({ children, sectionId, noPadding = false, className }) => {
  return (
    <section className={classNames(className, { "px-4 py-16 md:py-24 lg:px-8": !noPadding })} id={sectionId}>
      <div className={classNames({ "mx-auto max-w-screen-lg": !noPadding })}>{children}</div>
    </section>
  );
};

export default Section;
