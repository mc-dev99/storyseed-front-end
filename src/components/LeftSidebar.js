export default function LeftSidebar() {
  return (
    <aside id="leftSidebar">
      <h2>Updates</h2>
      <div class="box">
        <p>I have recently updated this tool as of August 2022!</p>
        <ul>
          <li>Rewrote the JS to generate cleaner code</li>
          <li>
            Rewrote the CSS in a way that hopefully makes much more sense to
            edit
          </li>
          <li>Added a couple of new features!</li>
          <li>
            Old version is still available{" "}
            <a href="old.html" target="_blank">
              here
            </a>
          </li>
        </ul>
      </div>
      <h2>Hi there!</h2>
      <p>
        Do you have a suggestion for a feature? Some criticism about the tool or
        something that confused you? Let me know! sadgrl[at]riseup.net
      </p>
    </aside>
  );
}
