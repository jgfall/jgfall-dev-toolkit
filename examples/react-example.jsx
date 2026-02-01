/**
 * React Components Example
 * 
 * @description Example usage of JGFall Dev Toolkit React components
 * @author Jackson Fall
 */

import React, { useState } from 'react';
import { Button, Card, Modal } from '../components/react';

function ExampleApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Button Examples */}
      <section className="section">
        <h2>Button Component</h2>
        
        <div className="button-group">
          <Button variant="primary" onClick={() => alert('Primary!')}>}
            Primary Button
          </Button>
          
          <Button variant="secondary">
            Secondary Button
          </Button>
          
          <Button variant="success" icon={<span>✓</span>}>
            Success with Icon
          </Button>
          
          <Button variant="danger" size="large">
            Large Danger Button
          </Button>
          
          <Button variant="primary" loading>
            Loading...
          </Button>
          
          <Button variant="ghost" disabled>
            Disabled Button
          </Button>
        </div>
      </section>

      {/* Card Examples */}
      <section className="section">
        <h2>Card Component</h2>
        
        <div className="card-grid">
          <Card
            title="Simple Card"
            subtitle="With title and subtitle"
            hoverable
          >
            <p>This is a simple card with some content.</p>
          </Card>
          
          <Card
            title="Card with Footer"
            footer={
              <Button variant="primary" fullWidth>
                Action Button
              </Button>
            }
            variant="elevated"
          >
            <p>This card has a footer with an action button.</p>
          </Card>
          
          <Card
            title="Clickable Card"
            clickable
            onClick={() => alert('Card clicked!')}
          >
            <p>Click anywhere on this card!</p>
          </Card>
        </div>
      </section>

      {/* Modal Example */}
      <section className="section">
        <h2>Modal Component</h2>
        
        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </Button>
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
          footer={
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          }
        >
          <p>This is a modal dialog with customizable content.</p>
          <p>Press ESC or click outside to close.</p>
        </Modal>
      </section>

      {/* Interactive Example */}
      <section className="section">
        <h2>Interactive Example</h2>
        
        <Card title="Counter" variant="elevated">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {count}
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Button
                variant="danger"
                onClick={() => setCount(c => c - 1)}
                icon={<span>-</span>}
              >
                Decrease
              </Button>
              <Button
                variant="ghost"
                onClick={() => setCount(0)}
              >
                Reset
              </Button>
              <Button
                variant="success"
                onClick={() => setCount(c => c + 1)}
                icon={<span>+</span>}
                iconPosition="right"
              >
                Increase
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default ExampleApp;
